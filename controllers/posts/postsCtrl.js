postsControllers= {
pstPostCtrl:async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'post created'
        })
    } catch (error) {
        res.json(error.message);
    }
},

pstGetCtrl:async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'get post by id route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

pstsGetCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'get posts route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

pstDeleteCtrl :async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'delete post route'
        })
    } catch (error) {
        res.json(error.message);
    }
},

pstUpdateCtrl: async(req, res)=>{
    try {
        res.json({
            status: 'success',
            data: 'update posts route'
        })
    } catch (error) {
        res.json(error.message);
    }
}}

module.exports=postsControllers;