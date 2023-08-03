namespace API_Train.model
{
    public class DoanTau
    {
        public string MaDoanTau { get; set; }
        public string IDTau { get; set; }

        // Định nghĩa thuộc tính tham chiếu tới bảng Tau
        public virtual Tau Tau { get; set; }
    }
}
