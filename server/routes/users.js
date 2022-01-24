const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.json([
        {
            username: 'yuvraj',
            age: 25
        },
        {
            username: 'Mike',
            age: 24
        },
        {
            username: 'Linda',
            age: 25
        }
    ])
});

module.exports = router;