namespace API_Train.model
{
    public class CT_HanhTrinh
    {
        public string IDHanhTrinh { get; set; }
        public string IDLichTrinh { get; set; }
        public string IDGaTau { get; set; }
        public decimal KhoangCach { get; set; }
        public DateTime NgayDi { get; set; }
        public DateTime ThoiGianDen { get; set; }
        public DateTime ThoiGianDi { get; set; }

        // Định nghĩa thuộc tính tham chiếu tới bảng GaTau
        public virtual GaTau GaTau { get; set; }
    }
}
