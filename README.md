# Plant_monitering_system_with_AI2
Readme
Plant Disease Detection with VGG16 using Tensorflow
This project uses VGG16, a pre-trained model of convolutional neural network (CNN), for identifying plant diseases. It utilizes the PlantVillage Dataset for training and testing the model.

Dependencies
Tensorflow
Numpy
Matplotlib
OpenCV
Glob
OS
Sklearn
ImageDataGenerator
VGG16
Input
AveragePooling2D
Flatten
Dense
Dropout
GlobalAveragePooling2D
load_model
Image
Usage
Dataset
The PlantVillage dataset is required to be downloaded for training and testing the model. You can download it using the following command:

!git clone https://github.com/spMohanty/PlantVillage-Dataset

Model
The model is built using VGG16 and is saved as 'model.h5' in the current directory. You can train the model using the following command:

model.fit(train_generator,steps_per_epoch=500,epochs=10)

Testing
For testing the model, you can use the following steps:

Load the model:
model=load_model('model.h5')
Load the image to be tested using the following command:
image1=Image.open('img0.jpg')
Resize the image to (224,224) using the following command:
image2=resizeimage.resize_cover(image1,[224,224])
Convert the image to a numpy array and normalize it using the following command:
image3=np.array(image2)/255.0
Reshape the numpy array to have the shape (1,224,224,3) using the following command:
image4=np.reshape(image3,(1,224,224,3))
Use the predict function to predict the class of the image:
p=model.predict(image4)
The output of the predict function is a probability distribution over the classes. You can get the class with the highest probability using the argmax function:
m1=np.argmax(p)
The predicted class can be obtained by indexing the label list:
l1=label[m1]
Display the predicted class and the image using matplotlib:
scss
Copy code
plt.imshow(image1)
plt.title(l1)
plt.show()
License
This project is designed and coded by  Sparkwood team 
