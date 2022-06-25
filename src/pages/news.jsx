import Head from "next/head";
import { TextInput, Checkbox, Button, Group, Box, Switch } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="検索したいワード"
          placeholder="人事異動"
          {...form.getInputProps("email")}
        />

        {/* <Checkbox
          mt="md"
          label=""
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        /> */}

        <Group position="right" mt="md">
          <Button type="submit">検索する</Button>
        </Group>
      </form>
    </Box>
  );
}

const News = () => {
  return (
    <>
      <Head>
        <title>ニュース一覧</title>
      </Head>
      <main className="bg-blue-500 h-screen">
        <div>ニュース一覧</div>
        <Demo />
      </main>
    </>
  );
};
export default News;
