export default function StudentItem({ student, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.maSV}</td>
      <td>{student.hoTen}</td>
      <td>{student.email}</td>
      <td>{student.gioiTinh}</td>
      <td>{student.ngaySinh}</td>
      <td>{student.ghiChu}</td>
      <td>
        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => onEdit(student)}>Sửa</button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.maSV)}>Xoá</button>
      </td>
    </tr>
  );
}
