$(document).ready(function () {
    $('#addTransactionForm').validate({
        rules: {
            customer: {
                required: true,
                maxlength: 15
            },
            employee: {
                required: true,
                maxlength: 20
            },
            amount: {
                required: true,
                number: true
            }
        },
        messages: {
            customer: {
                required: "Vui lòng nhập tên khách hàng",
                maxlength: "Tên không được vượt quá 15 ký tự"
            },
            employee: {
                required: "Vui lòng nhập tên nhân viên",
                maxlength: "Họ đệm không được vượt quá 20 ký tự"
            },
            amount: {
                required: "Vui lòng nhập số tiền",
                number: "Số tiền phải là số"
            }
        },
        errorClass: "is-invalid",
        validClass: "is-valid",
        errorPlacement: function (error, element) {
            error.appendTo(element.siblings('.invalid-feedback'));
        },
        highlight: function (element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        }
    });
});
