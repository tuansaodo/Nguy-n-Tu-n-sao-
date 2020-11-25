//ketqua
var ketqua_old = document.getElementById('ketqua').innerHTML;
//phimmoi
var phim_moi = '';
//Đổi dấu
var doi_dau = false;
// Số phép tính ưu tiên tìm thấy
var ưu_tien = 0;
var mang_so = new Array();
// Mảng ghi nhớ các số hạng
var mang_so_index = 0;
var mang_pt = new Array();

// Cài đặt sự kiện
/************* */

function ClickButton(obj){
    // chuỗi hiện tại của kết quả
    if(str_ketqua==''&&  phim_moi ==''){
        str_ketqua = ketqua.value;
    }
    if(str_ketqua == '0'){
        str_ketqua = '';
    }

    // HTML phím bấm
   var type = obj.innerHTML;
   
   //số
   if(
       type=='0' ||
       type=='1' ||
       type=='2' ||
       type=='3' ||
       type=='4' ||
       type=='5' ||
       type=='6' ||
       type=='7' ||
       type=='8' ||
       type=='9' ||
       type=='+/-' ||
       type=='.')
    {
       //đổi dấu
       if(type=='+/-'){
           if(doi_dau){
               doi_dau = false;
               phim_moi = phim_moi.substring(1);
           }else{
              doi_dau = true; 
              phim_moi = '-' + phim_moi; 
           }
       }
       // số
       else{
           phim_moi += type;
       }
       // Thay đổi hiển thị
       ketqua.value = str_ketqua + phim_moi;
    }
    // Nhóm phép tính
    else if (
        type=='+' ||
        type=='-' ||
        type=='X' ||
        type=='/'
    )
    {
        if(doi_phep_tinh){
            mang_pt[mang_pt_index-1] = type;
            ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;

        }
        else{
            mang_so[mang_so_index] = parseFloat(phim_moi);
            mang_so_index++;
            mang_pt[mang_pt_index] = type;
            mang_pt_index++;
            ketqua.value = ketqua.value + type;
        }
         
        doi_phep_tinh = true;
        str_ketqua = '';
        phim_moi = '';
    }
    else if(type == '=' || type == '%'){
        if(phim_moi!=''){
            mang_so[mang_so_index] = parseFloat(phim_moi);

        }
        if(type == '='){}
    }
}
