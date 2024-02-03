import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tu_basedatos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Conexión a MongoDB establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

export default connectDB;

