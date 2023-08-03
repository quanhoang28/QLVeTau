namespace API_Train.model
{
    public class Ve
    {
        public char MaVe { get; set; }
        public char IDDatCho { get; set; }
        public char IDKH { get; set; }
        public char IDGioVe { get; set; }
        public char TrangThaiVe { get; set; }

        public DatCho DatCho { get; set; }
        public KhachHang KhachHang { get; set; }
        public GioVe GioVe { get; set; }    
    }
}
