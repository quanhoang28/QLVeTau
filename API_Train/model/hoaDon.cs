namespace API_Train.model
{
    public class hoaDon
    {
        public string IDHoaDon { get; set; }
        public string IDNhanVien { get; set; }
        public DateTime NgayXuat { get; set; }
        public decimal TongTien { get; set; }

        public virtual NhanVien NhanVien { get; set; }
        public virtual ICollection<CT_HoaDon> ChiTietHoaDons { get; set; }

    }
}
