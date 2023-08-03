namespace API_Train.model
{
    public class ToaTau
    {
        public string? MaToaTau { get; set; }
        public string? TenToa { get; set; }
        public string? IDLoaicho { get; set; }
        public int SoLuong { get; set; }
        public int SoLuongCon { get; set; }

        // Property để lưu thông tin loại chỗ liên quan
        public LoaiCho? LoaiCho { get; set; }
    }
}
