<template>
  <div>
    <div class="fixedinset-0 overflow-y-auto" v-if="!showReceipt" style="z-index:700">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
            class="inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform
                        transition-all sm:my-8 sm:align-middle w-72"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white">
            <div class="flex justify-between">
              <h3 class="py-4 px-5 text-sm font-semibold text-gray-900 font-khmer_os" id="modal-headline">
                បង់ប្រាក់
              </h3>
              <button class="mr-5 focus:outline-none border-none" @click="closePaymentMethod"
                      ref="closePaymentMethod">
                <CloseIcon/>
              </button>
            </div>
            <div>
              <hr>
              <div class="my-5  px-10">
                <div class="">
                  <div class="p-3 text-center cursor-pointer border border-gray-300 rounded"
                       v-for="(option,key) in options" :key="key">
                    <button class="focus:outline-none border-o "
                            @click="paymentCheckout(option.is_paylater, option.code )"
                            :disabled="loadingCheckout">
                      <img :src="option.icon" class="m-auto w-24"/>
                      <h2 class="text-sm font-khmer_os mt-3 ">{{ option.title }}</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Message
          v-if="err"
          :message="errMessage"
          :hide="hide"
          @showCart="showCart"/>
      <ConfirmPayment
          v-if="confirmPayment"
          :html="confirmPaymentView"
          @closeConfirmPayment="closeConfirmPayment"/>
    </div>
    <ReceiptInfo
        @onPay="onPay($event)"
        @closeModal="()=>{this.showReceipt = false}"
        v-if="showReceipt"
        :receiptDetail="receiptDetail"
        @closeInfo="closeInfo()"/>
    <Bill
        :receiptDetail="receiptDetail"
        v-if="isBill"
        @closeModal="()=>{this.isBill = false; this.showReceipt = true;}"/>
  </div>
</template>

<script>
import CloseIcon from "./../components/CloseIcon"
import {mapActions, mapState} from "vuex"
import Message from "./Message"
import ConfirmPayment from "./../components/ConfirmPayment"
import ReceiptInfo from "./../components/ReceiptInfo"
import Bill from "@/views/Component/Bill";

export default {
  name: "PaymentMethod",
  components: {
    Bill,
    CloseIcon,
    Message,
    ConfirmPayment,
    ReceiptInfo
  },

  data() {
    return {
      isBill: false,
      showReceipt: false,
      err: false,
      errMessage: null,
      hide: false,
      payment_option: null,
      confirmPayment: false,
      confirmPaymentView: null,
      options: [
        {
          icon: "/icon/Payment/Bill.png",
          title: "បង្កើតវិក្កយបត្រ",
          is_paylater: 1,
          code: "bill"
        }
      ]
    }
  },

  computed: {
    ...mapState('payment', ['loadingCheckout', 'checkoutData', 'transaction']),
    ...mapState('cart', ['carts']),
    ...mapState('receipt', ['receiptDetail'])
  },
  methods: {
    ...mapActions('payment', ['checkout', 'getTransaction', 'abaPay', 'wingPay']),
    ...mapActions('receipt', ['getReceiptDetail']),
    ...mapActions('cart', ['getCart']),
    onPay(rc) {
      this.showReceipt = false
      this.isBill = true
    },
    closePaymentMethod($event) {
      this.$emit("closePaymentMethod", $event);
    },
    closeInfo($event) {
      this.closePaymentMethod($event)
      this.showReceipt = false
      this.getCart()

    },
    showCart() {
      this.err = false
      this.hide = false
    },
    closeConfirmPayment() {
      this.confirmPayment = false
    },
    paymentCheckout(is_paylater, code) {
      this.payment_option = code

      let checkout = []
      for (let index = 0; index < this.cart.list.length; index++) {
        let id, month;
        id = this.cart.list[index]._id
        month = this.cart.list[index].price.duration ? this.cart.list[index].price.duration : 12

        let cart = {
          id: id,
          month: month
        }
        checkout.push(cart)
      }

      this.checkout({
        courses: checkout,
        is_paylater: is_paylater
      }).then(res => {
        console.log(res)
        if (res.status === 4) {
          this.errMessage = res.msg
          this.err = true
          this.hide = true
          return;
        }
        if (res.status === 1) {
          this.errMessage = res.msg
          this.err = true
          this.hide = true
        } else {
          this.getReceiptDetail(res.data.e_code).then(() => {
            this.showReceipt = true
          })

        }
      }).catch(err => {
        this.errMessage = err.res
        this.err = true
        this.hide = true
      })
    }

  }
}
</script>