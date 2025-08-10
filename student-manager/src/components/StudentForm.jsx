import { useState, useEffect } from "react";

export default function StudentForm({ onSubmit, selectedStudent, clearSelection }) {
  const [formData, setFormData] = useState({
    maSV: "",
    hoTen: "",
    email: "",
    ngaySinh: "",
    gioiTinh: "",
    ghiChu: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
      setErrors({});
    } else {
      resetForm();
    }
  }, [selectedStudent]);

  const resetForm = () => {
    setFormData({
      maSV: "",
      hoTen: "",
      email: "",
      ngaySinh: "",
      gioiTinh: "",
      ghiChu: ""
    });
    setErrors({});
  };

  // Hàm validate từng trường
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "maSV":
        if (!value.trim()) error = "Mã sinh viên không được để trống";
        break;
      case "hoTen":
        if (!value.trim()) error = "Họ và tên không được để trống";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email không được để trống";
        } else {
          const regexEmail = /^\S+@\S+\.\S+$/;
          if (!regexEmail.test(value)) error = "Email không hợp lệ";
        }
        break;
      case "ngaySinh":
        if (!value) error = "Ngày sinh không được để trống";
        break;
      case "gioiTinh":
        if (!value) error = "Vui lòng chọn giới tính";
        break;
      default:
        break;
    }

    return error;
  };

  // Khi nhập vào input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate ngay khi gõ
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Khi rời khỏi input
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate tất cả trước khi submit
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    clearSelection();
    resetForm();
  };

  return (
    <div id="form_them">
      <div className="container_Tieu_de_form_them">
        <h3 className="text-white p-2 rounded text-center">Form Thêm Sinh Viên</h3>
      </div>
      <div className="card p-4" id="box_them_sinhvien">
        <form onSubmit={handleSubmit} noValidate>
          {/* Mã sinh viên */}
          <div className="mb-3">
            <label className="form-label">Mã sinh viên:</label>
            <input
              type="text"
              className={`form-control ${errors.maSV ? "is-invalid" : ""}`}
              name="maSV"
              value={formData.maSV}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.maSV && <div className="invalid-feedback">{errors.maSV}</div>}
          </div>

          {/* Họ và tên */}
          <div className="mb-3">
            <label className="form-label">Họ và tên:</label>
            <input
              type="text"
              className={`form-control ${errors.hoTen ? "is-invalid" : ""}`}
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.hoTen && <div className="invalid-feedback">{errors.hoTen}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Ngày sinh */}
          <div className="mb-3">
            <label className="form-label">Ngày sinh:</label>
            <input
              type="date"
              className={`form-control ${errors.ngaySinh ? "is-invalid" : ""}`}
              name="ngaySinh"
              value={formData.ngaySinh}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.ngaySinh && <div className="invalid-feedback">{errors.ngaySinh}</div>}
          </div>

          {/* Giới tính */}
          <div className="mb-3">
            <label className="form-label">Giới tính:</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className={`form-check-input ${errors.gioiTinh ? "is-invalid" : ""}`}
                name="gioiTinh"
                value="Nam"
                checked={formData.gioiTinh === "Nam"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-check-label">Nam</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className={`form-check-input ${errors.gioiTinh ? "is-invalid" : ""}`}
                name="gioiTinh"
                value="Nữ"
                checked={formData.gioiTinh === "Nữ"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="form-check-label">Nữ</label>
            </div>
            {errors.gioiTinh && <div className="invalid-feedback d-block">{errors.gioiTinh}</div>}
          </div>

          {/* Ghi chú */}
          <div className="mb-3">
            <label className="form-label">Ghi chú:</label>
            <textarea
              className="form-control"
              name="ghiChu"
              rows="4"
              value={formData.ghiChu}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-block w-100" id="btn_Themsv">
            {selectedStudent ? "Cập nhật sinh viên" : "Thêm sinh viên"}
          </button>
        </form>
      </div>
    </div>
  );
}
