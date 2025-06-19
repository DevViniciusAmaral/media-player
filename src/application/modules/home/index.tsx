import React from "react";
import { styles } from "./styles";
import { Text } from "@/application/components/base/text";
import { Layout } from "@/application/components/layout";

export const Home = () => {
  return (
    <Layout style={styles.container}>
      <Text size={50}>Home</Text>
    </Layout>
  );
};
