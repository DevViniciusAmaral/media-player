import React, { Fragment } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { ScrollView, View } from "react-native";
import { EllipsisVertical, Music2 } from "lucide-react-native";
import { Text } from "@/application/components/base/text";

interface AudioListProps {
  data: Array<any>;
}

export const AudioList = ({ data }: AudioListProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {data.map((_, index) => (
        <Fragment key={index}>
          <View style={styles.container}>
            <View style={styles.contentIcon}>
              <Music2 size={24} color={theme.colors.white} />
            </View>

            <View style={styles.details}>
              <Text>Nome da música</Text>
              <Text size={12} style={styles.author}>
                Nome do autor
              </Text>
            </View>

            <View>
              <EllipsisVertical size={20} color={theme.colors.white} />
            </View>
          </View>

          {index < data.length - 1 && <View style={styles.divider} />}
        </Fragment>
      ))}
    </ScrollView>
  );
};
