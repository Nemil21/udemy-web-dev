// class AppError extends Error{
//     constructor(message, status){
//         super();
//         this.message = message;
//         this.statusCode = status || 500;
//     }
// }

// module.exports = AppError;
class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;