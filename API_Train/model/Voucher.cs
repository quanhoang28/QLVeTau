namespace API_Train.model
{
    public class Voucher
    {
        public string? IDVoucher { get; set; }
        public string? CodeVoucher { get; set; }
        public string? MoTa { get; set; }
        public decimal? HeSoGiam { get; set; }
        public DateTime HanSuDung { get; set; }
        public string GetFormattedHanSuDung()
        {
            // Sử dụng ToString() để định dạng ngày tháng thành chuỗi
            return HanSuDung.ToString("dd/MM/yyyy");
        }
        public int? TrangThai { get; set; }
    }
}
