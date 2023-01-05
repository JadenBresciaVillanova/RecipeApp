import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function RecipeDescription({ route, navigation }) {
   
  return (

    <ScrollView>  
      <Image source={{uri: 'https://www.allrecipes.com/thmb/tOfkDV1xc28JMmITPQlQwy3FNWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg'}} 
              style={{width: 420, height:300 }} 
      />
      
      <Text style={styles.regularText}>Ingredients</Text>
       
      <Text style={styles.regularText}>
        1 1/2 cup flour {'\n'}
        3 1/2 teaspoons baking powder {'\n'}
        1 tablespoon sugar {'\n'}
        pinch salt {'\n'}
        1 1/4 cup milk {'\n'}
        3 tablespoons butter {'\n'}
        1 egg {'\n'}
      </Text>
      <Text style={styles.bigText}>Directions:</Text>
      <Text style={styles.regularText}>{'\n'}Step 1</Text>
      <Text style={styles.regularText}>
        Sift flour, baking powder, sugar, and salt 
        together in a large bowl. Make a well in the 
        center and add milk,
        melted butter, and egg;
        mix until smooth. {'\n'}
      </Text>
      <Text style={styles.regularText}>Step 2</Text>
      <Text style={styles.regularText}>
      Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter 
      onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles 
      form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the
      other side. Repeat with remaining batter.
      </Text>
  </ScrollView>
  
  );
}

const styles = StyleSheet.create({

  regularText: {
    fontFamily: "Arial",
  },
  bigText: {
    fontSize: 30,
  }
});


