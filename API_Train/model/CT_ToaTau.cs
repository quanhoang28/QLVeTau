namespace API_Train.model
{
    public class CT_ToaTau
    {
        public string? IDCT_ToaTau { get; set; }
        public string? IDToaTau { get; set; }
        public string? ViTri { get; set; }
        public string? SoGhe { get; set; }

        // Định nghĩa thuộc tính tham chiếu tới bảng ToaTau
        public ToaTau ToaTau { get; set; }
    }
}
