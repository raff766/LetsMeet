import { StyleSheet } from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default StyleSheet.create({
  pcontainer: {
    flex: 1,
    margin: 20,
  },
  header: {
    backgroundColor: '#8F35F3',
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: 45,
  },
  avataredit: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
    margin: 10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 18,
    color: '#696969',
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 20,
  },
  description: {
    fontSize: 18,
    color: '#696969',
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 20,
  },
  buttonContainer: {
    marginTop: 54,
    height: 45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    borderRadius: 20,
    backgroundColor: '#F3ED35',
  },
  cameraIcon: {
    opacity: 0.5,
    alignItems: 'center',
    marginTop: 0,
    top: 0,
  },
  UICenter: {
    alignItems: 'center',
    margin: 20,
  },
  Editcontent: {
    borderRadius: 2,
    alignItems: 'flex-end',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  editlogo: {
    alignSelf: 'flex-end',
    marginTop: 50,
  },
  inputOther: {
    marginLeft: 10,
    width: 200,
    height: 40,
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    margin: 1,
  },
  bioinputOther:{
    marginLeft: 10,
    width: 250,
    height: 60,
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    margin: 1,
  },
  tag:{
    backgroundColor: '#2A5353',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  taginput:{
    backgroundColor: '#FFFFFF',
    color: '#606060',
    fontWeight: 'bold',
  },
  textTag:{
    color: '#EBEBEB',
    fontWeight: 'bold',
  },
  tagContainer:{
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  screen:{
    flex: 1,
    backgroundColor: '#D6D6D6'
  },
})
