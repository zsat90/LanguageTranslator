import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/globalStyles";
import { languages } from "../utils/languages";
import translateText from "../services/translateAPI";


const TranslatorPage = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  

  const handleTranslate = async () => {
    const result = await translateText(text, selectedLanguage);

    if (result && result.translations && result.translations.translation) {
      navigation.navigate("TranslatedText", {
        translatedText: result.translations.translation,
      });
    } else {
      console.error("Translation Failed. Please Try again.");
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>English:</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        multiline
        placeholder="Enter text to translate..."
      />
      <Text style={styles.text}>Choose Langauge to translate to:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        {languages.map((language, index) => (
          <Picker.Item
            key={index}
            label={language.label}
            value={language.value}
          />
        ))}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleTranslate}>
        <Text style={styles.buttonText}>Translate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranslatorPage;
