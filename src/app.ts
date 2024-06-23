import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { sequelize } from './config/sequelize';
import userRoutes from './routes/userRoutes';
import ticketRoutes from './routes/ticketRoutes';
import userFollowRoutes from './routes/userFollowRoutes';
import subEventRoutes from './routes/subEventRoutes';
import paymentRoutes from './routes/paymentRoutes';
import packageItemRoutes from './routes/packageItemRoutes';
import featuredEventRoutes from './routes/featuredEventRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import eventRoutes from './routes/eventRoutes';
import eventPackageRoutes from './routes/eventPackageRoutes';
import eventDocumentRoutes from './routes/eventDocumentRoutes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/user-follows', userFollowRoutes);
app.use('/sub-events', subEventRoutes);
app.use('/payments', paymentRoutes);
app.use('/package-items', packageItemRoutes);
app.use('/featured-events', featuredEventRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/events', eventRoutes);
app.use('/packages', eventPackageRoutes);
app.use('/event-documents', eventDocumentRoutes);

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
