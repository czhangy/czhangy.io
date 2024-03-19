import styles from "./TestFile.module.scss";

export type TestFileProps = {};

const TestFile: React.FC<TestFileProps> = (props: TestFileProps) => {
    return <div className={styles["test-file"]}></div>;
};

export default TestFile;
