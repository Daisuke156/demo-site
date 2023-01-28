import { List, ScrollArea } from "@mantine/core";

const News = () => {
  return (
    <>
      <div>
        <div className="text-sm">
          <ScrollArea style={{ height: 250, width: 180 }}>
            <div style={{ width: 600 }}>
              <List type="ordered" size="sm">
                <List.Item>Clone or download repository from GitHub</List.Item>
                <List.Item>Install dependencies with yarn</List.Item>
                <List.Item>
                  To start development server run npm start command
                </List.Item>
                <List.Item>
                  Run tests to make sure your changes do not break the build
                </List.Item>
                <List.Item>Submit a pull request once you are done</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
                <List.Item>Lorem</List.Item>
              </List>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};
export default News;
