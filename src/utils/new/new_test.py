import filecmp
import unittest

from new import *

class NewTest(unittest.TestCase):
    # Example args
    BASIC_ARGS = ['Test', 'TestFile']
    BAD_SUBDIR_ARGS = ['TestDir', 'TestFile']
    BAD_COMPONENT_ARGS = ['Global', 'Navbar']

    # File paths
    SUBDIR_PATH = 'src/components/Test'
    COMPONENT_PATH = 'src/components/Test/TestFile'
    TEST_TSX_PATH = 'src/utils/new/tests/new_tsx.txt'
    TEST_TSX_SINGLE_WORD_PATH = 'src/utils/new/tests/new_tsx_single_word.txt'
    TEST_SCSS_PATH = 'src/utils/new/tests/new_scss.txt'
    TEST_SPEC_PATH = 'src/utils/new/tests/new_spec.txt'

    def test_validate_directory_pass(self):
        try:
            validate_directory()
        except:
            self.fail('validate_directory() raised an exception unexpectedly.')


    def test_validate_directory_fail(self):
        cwd = os.getcwd()
        os.chdir(cwd + '/src')
        with self.assertRaisesRegex(Exception, WRONG_DIRECTORY):
            validate_directory()
        os.chdir(cwd)


    def test_get_paths(self):
        subdir_path, component_path = get_paths(parse_args(self.BASIC_ARGS))
        self.assertEqual(subdir_path, self.SUBDIR_PATH)
        self.assertEqual(component_path, self.COMPONENT_PATH)


    def test_validate_args_pass(self):
        try:
            validate_args(parse_args(self.BASIC_ARGS))
        except:
            self.fail('validate_args() raised an exception unexpectedly.')
    

    def test_validate_args_subdir_fail(self):
        with self.assertRaisesRegex(Exception, SUBDIRECTORY_DOESNT_EXIST):
            validate_args(parse_args(self.BAD_SUBDIR_ARGS))


    def test_validate_args_component_fail(self):
        with self.assertRaisesRegex(Exception, COMPONENT_EXISTS):
            validate_args(parse_args(self.BAD_COMPONENT_ARGS))


    def test_create_tsx(self):
        component_name = 'TestFile'
        create_tsx(self.SUBDIR_PATH, component_name)
        self.assertTrue(filecmp.cmp(f'{self.SUBDIR_PATH}/{component_name}.tsx', self.TEST_TSX_PATH))

    def test_create_tsx_single_word(self):
        component_name = 'Test'
        create_tsx(self.SUBDIR_PATH, component_name)
        self.assertTrue(filecmp.cmp(f'{self.SUBDIR_PATH}/{component_name}.tsx', self.TEST_TSX_SINGLE_WORD_PATH))


    def test_create_scss(self):
        component_name = 'TestFile'
        create_scss(self.SUBDIR_PATH, component_name)
        self.assertTrue(filecmp.cmp(f'{self.SUBDIR_PATH}/{component_name}.module.scss', self.TEST_SCSS_PATH))


    def test_create_spec(self):
        component_name = 'TestFile'
        create_spec(self.SUBDIR_PATH, component_name)
        self.assertTrue(filecmp.cmp(f'{self.SUBDIR_PATH}/{component_name}.spec.tsx', self.TEST_SPEC_PATH))


if __name__ == '__main__':
    unittest.main()
