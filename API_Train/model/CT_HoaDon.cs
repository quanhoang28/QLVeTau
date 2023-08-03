namespace API_Train.model
{
    public class CT_HoaDon
    {
        public string IDcthd { get; set; }
        public string IDHoaDon { get; set; }
        public string IDVe { get; set; }
        public string IDVou { get; set; }

        public virtual hoaDon HoaDon { get; set; }
        public virtual Ve Ve { get; set; }
        public virtual Voucher Voucher { get; set; }
    }
}
