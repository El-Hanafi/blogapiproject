
usersControllers = {
//Register
usrRegisterCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'user registered'
        })
    } catch (error) {
        res.json(error.message);
    }
},

//login
usrLoginCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'user logged in'
        })
    } catch (error) {
        res.json(error.message);
    }
},
//get profile
usrProfileCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'profile route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

//get users
usrsCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'get users route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

//delete user
usrDeleteCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'delete user route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

usrUpdateCtrl : async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'update user route'
        })
    } catch (error) {
        res.json(error.message);
    }
},
};





module.exports = usersControllers;