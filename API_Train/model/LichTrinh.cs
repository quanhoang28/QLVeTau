namespace API_Train.model
{
    public class LichTrinh
    {
        public char IDLichTrinh { get; set; }
        public char GaDen { get; set; }
        public char GaDi { get; set; }
        public TimeSpan ThoiGianBD { get; set; }
        public TimeSpan ThoiGianKT { get; set; }

        public DateTime NgayBD { get; set; }
        public string GetFormattedNgayBD()
        {
            // Sử dụng ToString() để định dạng ngày tháng thành chuỗi
            return NgayBD.ToString("dd/MM/yyyy");
        }
        public DateTime NgayKT { get; set; }
        public string GetFormattedNgayKT()
        {
            // Sử dụng ToString() để định dạng ngày tháng thành chuỗi
            return NgayKT.ToString("dd/MM/yyyy");
        }
        public virtual GaTau GaTau { get; set; }

        public int SoLuongCho_Trong { get; set; }
        public int SoLuongCho_Dat { get; set; }
        public int SoLuongToa { get; set; }
        public decimal TongQuangDuong { get; set; }
        public int TongThoiGian { get; set; }

    }
}
