import React, { useState } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { ScrollView, View } from "react-native";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Button } from "@/application/components/base/button";
import { EllipsisVertical, Music2 } from "lucide-react-native";
import { AudioList } from "./components/audio-list";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);

  const [menuOptions, setMenuOptions] = useState([
    { label: "Áudios", isActive: true },
    { label: "Vídeos", isActive: false },
  ]);

  const toogleMenu = () => {
    setMenuOptions((options) =>
      options.map((option) => ({ ...option, isActive: !option.isActive }))
    );
  };

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={22} weight="bold">
            Media Player
          </Text>
        </View>
      }
    >
      <View style={styles.menuButtonsContainer}>
        {menuOptions.map(({ label, isActive }, index) => (
          <Button
            key={index}
            style={styles.menuButton(isActive)}
            onPress={toogleMenu}
          >
            <Text
              style={styles.menuTextButton(isActive)}
              weight={isActive ? "medium" : "light"}
            >
              {label}
            </Text>
          </Button>
        ))}
      </View>

      <AudioList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </Layout>
  );
};
