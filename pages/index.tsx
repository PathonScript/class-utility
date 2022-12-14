import Head from "next/head";

import { Center, Container, Heading } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout/content";
import Paragraph from "../components/paragraph";

import useDate from "../lib/hooks/useDate";

export default function Home() {
  const { time, day } = useDate();

  return (
    <>
      <Head>
        <title>Class Tools</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          <Container centerContent>
            <Center flexDirection="column" h="full">
              <Heading size="3xl">{time}</Heading>
              <Paragraph>{day}</Paragraph>
            </Center>
          </Container>
        </main>
      </Layout>
    </>
  );
}
