class NavigationOptionsHelper{
    static  navigationOptions(title,view){
        return {
            title:title,
            headerStyle: {
                backgroundColor: "#548AFF",
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                flex: 1,
            },
            headerTintColor: '#fff',
            headerRight: view,
            headerBackTitle:null
        }
    }
}


export default NavigationOptionsHelper