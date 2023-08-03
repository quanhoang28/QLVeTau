namespace API_Train.model
{
    public class CT_DoanTau
    {
        public string? MaCT_DoanTau { get; set; }
        public string? IDToaTau { get; set; }
        public string? IDDoanTau { get; set; }

        // Định nghĩa thuộc tính tham chiếu tới bảng DoanTau
        public DoanTau DoanTau { get; set; }

        // Định nghĩa thuộc tính tham chiếu tới bảng ToaTau
        public ToaTau ToaTau { get; set; }
    }
}
