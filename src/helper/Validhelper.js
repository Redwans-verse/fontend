import toast from 'react-hot-toast';

class Validhelper {
    isEmpty(value){
        if(value.length===0){
            return true
        }else {
            return false
        }
    };

    successToast(msg){
        toast.success(msg)
    };

    errorToast(msg){
        toast.error(msg)
    };

}

export const {isEmpty,successToast,errorToast}=new Validhelper()
