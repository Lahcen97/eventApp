import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { sequelize } from './config/sequelize';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import eventRoutes from './routes/eventRoutes';
import eventDocumentRoutes from './routes/eventDocumentRoutes';
import featuredEventRoutes from './routes/featuredEventRoutes';
import ticketRoutes from './routes/ticketRoutes';
import eventPackageRoutes from './routes/eventPackageRoutes';
import packageItemRoutes from './routes/packageItemRoutes';
import paymentRoutes from './routes/paymentRoutes';
import subEventRoutes from './routes/subEventRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import userFollowRoutes from './routes/userFollowRoutes';

const app = express();

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/event-documents', eventDocumentRoutes);
app.use('/featured-events', featuredEventRoutes);
app.use('/tickets', ticketRoutes);
app.use('/packages', eventPackageRoutes);
app.use('/package-items', packageItemRoutes);
app.use('/payments', paymentRoutes);
app.use('/sub-events', subEventRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/user-follows', userFollowRoutes);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: createError.HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
