export const loggerMiddleware = (req, res, next) => {
    console.log(`Log: Fecha ${new Date()} - Metodo ${req.method} - URL ${req.url}`);
    next();
}