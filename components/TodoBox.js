import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const TodoBox = () => {

	return(

		<TouchableOpacity style={styles.contentWrapper}>
			<View style={{maxWidth: '60%', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
				<Text style={{fontSize: 16, fontWeight: 'bold',}}>Watching Football</Text>
				<Text style={styles.bodyContent} numberOfLines = { 1 } >This is the Sample Ellipsis Text for Ellipsis from Start.This is the Sample Ellipsis Text for Ellipsis from Start.This is the Sample Ellipsis Text for Ellipsis from Start</Text>
				<Text style={styles.dateContent}>14/07/2022</Text>
			</View>
		</TouchableOpacity>

	)
}

const styles = StyleSheet.create({
	contentWrapper: {
		backgroundColor: '#E9E9E9',
		width: 297,
		height: 78,
		padding: 10,
		borderRadius: 16,
		marginVertical: 12,
	},
})


export default TodoBox