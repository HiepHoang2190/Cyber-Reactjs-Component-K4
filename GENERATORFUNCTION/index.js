let arrSv = [
    {ma:1, ten:'Khải'}
]

function * themSinhVien (sv) { //generator function : trả về nhiều giá trị sau nhiều lần gọi
    yield [...arrSv,sv]; // yield giống như lệnh return

    yield 'Thêm sinh viên thành công';
    return 'Thành công';
}

function main() {
    let sinhvien = {ma:2,ten:'Nguyễn Văn A'};

    const iterator = themSinhVien(sinhvien);

    console.log('iterator', iterator.next());
    console.log('iterator', iterator.next().value);
    console.log('iterator', iterator.next());
}

main();