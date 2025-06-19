import React from "react";
import { styles } from "./styles";
import { Text } from "@/application/components/base/text";
import { Layout } from "@/application/components/layout";
import { View } from "react-native";

export const Home = () => {
  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={20} weight="bold">Media Player</Text>
        </View>
      }
    >
      <></>
    </Layout>
  );
};
