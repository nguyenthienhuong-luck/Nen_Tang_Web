$(document).ready(function () {
  // Khởi tạo validate cho form Thêm Giao Dịch
  $('#addTransactionForm').validate({
    ignore: [], // không bỏ qua bất kỳ input nào

    rules: {
      customer: {
        required: true,
        maxlength: 30
      },
      employee: {
        required: true,
        maxlength: 30
      },
      amount: {
        required: true,
        number: true,
        min: 1000 // Số tiền tối thiểu nếu cần ràng buộc
      }
    },

    messages: {
      customer: {
        required: "Vui lòng nhập tên khách hàng",
        maxlength: "Tên khách hàng không được vượt quá 30 ký tự"
      },
      employee: {
        required: "Vui lòng nhập tên nhân viên",
        maxlength: "Tên nhân viên không được vượt quá 30 ký tự"
      },
      amount: {
        required: "Vui lòng nhập số tiền",
        number: "Số tiền phải là một số hợp lệ",
        min: "Số tiền phải lớn hơn 1.000 VND"
      }
    },

    errorElement: "div",
    errorClass: "invalid-feedback",

    highlight: function (element) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element) {
      $(element).removeClass("is-invalid");
    },
    errorPlacement: function (error, element) {
      if (element.parent().hasClass("input-group")) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },

    submitHandler: function (form) {
      alert("Thông tin hợp lệ. Giao dịch đã được thêm!");
      form.reset();
      $("#addTransactionModal").modal("hide");
    }
  });
});
