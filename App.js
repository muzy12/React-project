import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginUI}

        />
        <><Stack.Screen name="Signup" component={SignUI} /><Stack.Screen name="Home" component={HomePage} /></>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//login page-----------------------------------------------------------------------------------------------login-
const LoginUI = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Image style={styles.img}

        source={require('./assets/Images/logo.png')}
      />
      <View style={styles.innerContainer}>

        <TouchableOpacity style={styles.butcommon}//signup button in login page
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{
            color: "#FF0136",
            left: 130, top: 9,
          }}>Sign up</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.butlog}//login button in login page
          onPress={() => navigation.navigate('Login')}>
          <Text style={{
            color: "#FFFFFF",
            left: 35, top: 9,
          }}>Log In</Text>

        </TouchableOpacity>
        <Text
          style={{
            color: '#FF0036',
            fontFamily: 'Inika',

            top: 80,
            left: 35,
          }}>Enter email or username</Text>
        <Text
          style={{
            color: '#FF0036',
            fontFamily: 'Inika',
            top: 200,
            left: 35,
          }}>Enter password</Text>
        <TextInput
          style={styles.input1}></TextInput>
        <TextInput
          style={styles.input2}></TextInput>
        <Text
          style={{
            color: '#8280F8',
            fontFamily: 'Inika',
            fontSize: 12,
            top: 250,
            left: 35,
          }}>Forget password?</Text>

        <TouchableOpacity style={styles.butsubmit}//this button will navigate to home page from login page
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: "#FFFFFF", left: 35, top: 9, }}>Submit</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

//signup page--------------------------------------------------------------------------------------------sign up-
const SignUI = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Image style={styles.img}

        source={require('./assets/Images/logo.png')}
      />
      <View style={styles.innerContainer}>

        <TouchableOpacity style={styles.butcommon}//login button of the signup page
          onPress={() => navigation.navigate('Login')}>
          <Text style={{
            color: "#FF0136",
            left: 35, top: 9,
          }}>Log In</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.butsign}//sign up button of the sign up page
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{
            color: "#FFFFFF",
            left: 30, top: 9,
          }}>Sign up</Text>

        </TouchableOpacity>
        <Text
          style={{
            color: '#FF0036',
            fontFamily: 'Inika',

            top: 80,
            left: 35,
          }}>Enter email</Text>
        <Text
          style={{
            color: '#FF0036',
            fontFamily: 'Inika',
            top: 200,
            left: 35,
          }}>Enter password</Text>
        <TextInput
          style={styles.input1}></TextInput>
        <TextInput
          style={styles.input2}></TextInput>


        <TouchableOpacity style={styles.butsubmit}//submit button of the signup page
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: "#FFFFFF", left: 35, top: 9, }}>Submit</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

//Home page------------------------------------------------------------------------------------------home page---
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.eclipse}><LinearGradient
        colors={['#FF0136', '#FF6686',]}
        style={styles.eclipse} />



        <Image style={styles.img2}

          source={require('./assets/Images/image2.png')}
        />
      </View>
      <TouchableOpacity style={styles.button1}
      >
        <Text style={{
          color: "#FF0036",
          top: 9, left: 60,
        }}>Employee record management</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}
      >
        <Text style={{ color: "#FF0036", top: 9, left: 60, }}>Time and attendance tracking</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}
      >
        <Text style={{ color: "#FF0036", top: 9, left: 50, }}>Employee recruitment and selection</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}
      >
        <Text style={{ color: "#FF0036", top: 9, left: 100, }}>Payroll management</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}
      >
        <Text style={{ color: "#FF0036", top: 9, left: 80, }}>Training and development</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.componentbar}
      >
        <TouchableOpacity style={styles.buthome}
          onPress={() => navigation.navigate('Home')}>
          <Image style={styles.imghome}
            source={require('./assets/Images/home.png')}
          /></TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.imgsearch}
            source={require('./assets/Images/search.png')} /></TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.imageuser}
            source={require('./assets/Images/user.png')} /></TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.imagesettings}
            source={require('./assets/Images/settings.png')} /></TouchableOpacity>

      </TouchableOpacity>


    </View>
  );
};
//style sheet---------------------------------------------------------------------------------------------stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FF',
  },

  innerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 303,
    position: 'absolute',
    top: 250,

    bottom: 40,
    left: 43,
    borderRadius: 56,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(179,178,240,0.67)', // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 67, // iOS shadow opacity
  },
  img: {
    left: 118,
    top: 97,

  },
  butlog: {
    backgroundColor: '#FF0136',
    width: 111,
    height: 34,
    left: 40,
    top: 31,
    borderRadius: 34,
  },
  butsign: {
    backgroundColor: '#FF0136',
    width: 111,
    height: 34,
    left: 140,
    top: 31,
    borderRadius: 34,
  },
  butcommon: {
    backgroundColor: '#FFFFFF',
    width: 211,
    height: 34,
    left: 40,
    top: 65,
    borderRadius: 34,
    elevation: 1, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25, // iOS shadow opacity

  },
  butsubmit: {
    backgroundColor: '#FF0136',
    width: 111,
    height: 34,
    left: 160,
    top: 300,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(179,178,240,0.67)', // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 4, // iOS shadow opacity
  },
  input1: {
    backgroundColor: '#FFFFFF',
    width: 230,
    height: 25,
    left: 35,
    top: 100,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25, // iOS shadow opacity
  },
  input2: {
    backgroundColor: '#FFFFFF',
    width: 230,
    height: 25,
    left: 35,
    top: 220,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25, // iOS shadow opacity
  },

  //home page===============================================================================home stylesheet---

  eclipse: {

    width: 610,
    height: 550,
    left: -100,
    top: -150,
    borderRadius: 360,




  },
  img2: {
    left: 225,
    top: -325,
  },
  button1: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 35,
    left: 16,
    top: -200,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,

  },
  button2: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 35,
    left: 16,
    top: -175,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,

  },
  button3: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 35,
    left: 16,
    top: -150,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,

  },
  button4: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 35,
    left: 16,
    top: -125,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,

  },
  button5: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 35,
    left: 16,
    top: -100,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.25)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,

  },
  componentbar: {

    backgroundColor: '#FFFFFF',
    width: 342,
    height: 48,
    left: 20,
    top: 15,
    borderRadius: 34,
    elevation: 5, // Android shadow
    shadowColor: 'rgba(255, 1, 54, 1)', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 25,
  },
  buthome: {

    width: 99,
    backgroundColor: '#FF0136',
    height: 48,
    borderRadius: 34,
    top: 0,
    left: 0,


  },
  imghome: {
    top: 10,
    left: 35,
  },
  imgsearch: {
    top: -35,
    left: 125,
  },
  imageuser: {
    top: -59,
    left: 210,

  },
  imagesettings: {
    top: -83,
    left: 300,

  },

});





export default LoginUI;
