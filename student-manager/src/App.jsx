import { useState, useEffect } from "react";
import "./index.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { initialStudents } from "./data";

export default function App() {
  const [students, setStudents] = useState(() => {
    // Lấy dữ liệu từ localStorage nếu có, nếu không thì dùng initialStudents
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [selectedStudent, setSelectedStudent] = useState(null);

  // Mỗi khi students thay đổi → lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAddOrUpdate = (student) => {
    if (selectedStudent) {
      setStudents(prev =>
        prev.map(s => (s.maSV === selectedStudent.maSV ? student : s))
      );
      alert("Cập nhật thành công!");
    } else {
      setStudents(prev => [...prev, student]);
      alert("Thêm sinh viên thành công!");
    }
    setSelectedStudent(null); // Xoá lựa chọn sau khi cập nhật
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const handleDelete = (maSV) => {
    if (confirm("Bạn có chắc chắn muốn xoá?")) {
      setStudents(prev => prev.filter(s => s.maSV !== maSV));
      alert("Xoá thành công!");
    }
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg" id="Tieu_de_chinh">
        <div className="container-fluid justify-content-center">
          <p className="text-white text-center" id="text_chinh">
            Hệ Thống Quản Lý Sinh Viên
          </p>
        </div>
      </nav>

      <div className="layout-container">
        <StudentForm
          onSubmit={handleAddOrUpdate}
          selectedStudent={selectedStudent}
          clearSelection={() => setSelectedStudent(null)}
        />
        <StudentList
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
