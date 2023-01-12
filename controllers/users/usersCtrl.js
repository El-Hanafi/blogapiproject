
//Register
const usrRegisterCtrl = async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        })
    } catch (error) {
        res.json(error.message);
    }
};

//login
const usrLoginCtrl = async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'user logged in'
        })
    } catch (error) {
        res.json(error.message);
    }
};

//get profile
const usrProfileCtrl = async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'profile route'
        })
    } catch (error) {
        res.json(error.message);
    }
};

//get users
const usrsCtrl = async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'get users route'
        })
    } catch (error) {
        res.json(error.message);
    }
};

//delete user
const usrDeleteCtrl =  async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'delete user route'
        })
    } catch (error) {
        res.json(error.message);
    }
};

const usrUpdateCtrl = async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'update user route'
        })
    } catch (error) {
        res.json(error.message);
    }
}



module.exports = {
    usrRegisterCtrl,
    usrLoginCtrl,
    usrProfileCtrl,
    usrsCtrl,
    usrDeleteCtrl,
    usrUpdateCtrl
}