import StudentItem from "./StudentItem";

export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="col">
      <div className="container_Tieu_de_dssv">
        <h3 id="Tieu_de_dssv">Danh Sách Sinh Viên</h3>
      </div>
      <div className="table-responsive">
        <table id="box_ds_sinhvien">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Ghi chú</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {students.map((sv, i) => (
              <StudentItem key={sv.maSV} student={sv} index={i} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
