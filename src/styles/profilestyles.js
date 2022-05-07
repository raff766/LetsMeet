import { StyleSheet } from 'react-native'

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
    fontSize: 20,
    color: '#696969',
    fontWeight: 'bold',
    marginTop: 15,
  },
  body: {
    marginTop: 40,
    margin: 20,
  },
  interests: {
    fontSize: 18,
    color: '#696969',
    marginTop: 10,
    marginBottom: 5,
  },
  line: {
    borderTopWidth: 0.5, 
    borderColor: 'lightgrey', 
    marginBottom: 5,
  },
  bio: {
    fontSize: 18,
    color: '#696969',
    marginTop: 20,
    marginBottom: 25,
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
  tags:{
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  tagsWrap:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
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
    margin: 7,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  screen:{
    flex: 1,
    backgroundColor: '#D6D6D6'
  },
  icon:{
    marginTop: 25,
  },
})