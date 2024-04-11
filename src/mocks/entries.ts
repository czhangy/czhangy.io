import {
    CAREER_CHRONICLES,
    GAMING_GRIND,
    LIFE_LOGS,
    RANDOM_RAVINGS,
    WARRIORS_WATCH,
} from "@/static/constants";
import { Entry } from "@/static/types";

/** A mock journal entry */
export const mockJournalEntry: Entry = {
    title: "Test Entry",
    timestamp: "01/01/2024",
    sections: [
        {
            type: LIFE_LOGS,
            title: "Test Life Logs Section",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque. Nulla aliquet porttitor lacus luctus. Velit dignissim sodales ut eu sem integer vitae justo eget. Nisl condimentum id venenatis a condimentum vitae sapien. Sit amet massa vitae tortor condimentum.",
                "Hac habitasse platea dictumst vestibulum rhoncus est. Facilisis magna etiam tempor orci eu. Scelerisque purus semper eget duis at tellus. Velit laoreet id donec ultrices tincidunt arcu non. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.",
            ],
        },
        {
            type: CAREER_CHRONICLES,
            title: "Test Career Chronicles Section",
            paragraphs: [
                "Senectus et netus et malesuada fames ac. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Viverra mauris in aliquam sem. Sit amet nisl purus in mollis nunc. Adipiscing tristique risus nec feugiat in. Vel eros donec ac odio tempor orci dapibus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Auctor elit sed vulputate mi. Velit dignissim sodales ut eu sem. Tristique magna sit amet purus gravida quis blandit turpis. Viverra mauris in aliquam sem fringilla. Purus sit amet luctus venenatis lectus magna fringilla.",
            ],
        },
        {
            type: WARRIORS_WATCH,
            title: "Test Warriors Watch Section",
            paragraphs: [
                "Viverra nibh cras pulvinar mattis nunc. Laoreet suspendisse interdum consectetur libero id faucibus.",
            ],
        },
        {
            type: GAMING_GRIND,
            title: "Test Gaming Grind Section",
            paragraphs: [
                "Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mattis enim ut tellus elementum sagittis. Ut sem nulla pharetra diam. In fermentum posuere urna nec tincidunt praesent semper feugiat. Enim eu turpis egestas pretium aenean pharetra magna. Nibh ipsum consequat nisl vel pretium lectus quam. Aliquam id diam maecenas ultricies mi eget. Tincidunt id aliquet risus feugiat in ante metus dictum at. Tristique senectus et netus et malesuada fames ac. Eget nunc scelerisque viverra mauris in aliquam. Morbi blandit cursus risus at ultrices mi. In arcu cursus euismod quis viverra nibh cras. Adipiscing elit pellentesque habitant morbi. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Pharetra pharetra massa massa ultricies mi. In eu mi bibendum neque egestas congue. Porttitor eget dolor morbi non arcu risus. Lectus magna fringilla urna porttitor rhoncus dolor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas integer eget aliquet nibh praesent tristique magna sit amet.",
            ],
        },
        {
            type: RANDOM_RAVINGS,
            title: "Test Random Ravings Section",
            paragraphs: [
                "Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Facilisis sed odio morbi quis commodo odio aenean. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Et ligula ullamcorper malesuada proin libero. Urna porttitor rhoncus dolor purus non enim praesent elementum. Nunc congue nisi vitae suscipit. Purus non enim praesent elementum facilisis leo vel fringilla. Pellentesque pulvinar pellentesque habitant morbi tristique. Diam sollicitudin tempor id eu nisl nunc. Eu volutpat odio facilisis mauris sit amet.",
            ],
        },
    ],
};

/** A mock journal entry with only a Life Logs section */
export const mockLifeLogsEntry: Entry = {
    title: "Life Logs Test Entry",
    timestamp: "01/02/2024",
    sections: [
        {
            type: LIFE_LOGS,
            title: "Test Life Logs Section",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque. Nulla aliquet porttitor lacus luctus. Velit dignissim sodales ut eu sem integer vitae justo eget. Nisl condimentum id venenatis a condimentum vitae sapien. Sit amet massa vitae tortor condimentum. Hac habitasse platea dictumst vestibulum rhoncus est. Facilisis magna etiam tempor orci eu. Scelerisque purus semper eget duis at tellus. Velit laoreet id donec ultrices tincidunt arcu non. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.",
            ],
        },
    ],
};

/** A mock journal entry with only a Career Chronicles section */
export const mockCareerChroniclesEntry: Entry = {
    title: "Career Chronicles Test Entry",
    timestamp: "01/03/2024",
    sections: [
        {
            type: CAREER_CHRONICLES,
            title: "Test Career Chronicles Section",
            paragraphs: [
                "Senectus et netus et malesuada fames ac. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Viverra mauris in aliquam sem. Sit amet nisl purus in mollis nunc. Adipiscing tristique risus nec feugiat in. Vel eros donec ac odio tempor orci dapibus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Auctor elit sed vulputate mi. Velit dignissim sodales ut eu sem. Tristique magna sit amet purus gravida quis blandit turpis. Viverra mauris in aliquam sem fringilla. Purus sit amet luctus venenatis lectus magna fringilla.",
            ],
        },
    ],
};

/** A mock journal entry with only a Warriors Watch section */
export const mockWarriorsWatchEntry: Entry = {
    title: "Warriors Watch Test Entry",
    timestamp: "01/04/2024",
    sections: [
        {
            type: WARRIORS_WATCH,
            title: "Test Warriors Watch Section",
            paragraphs: [
                "Viverra nibh cras pulvinar mattis nunc. Laoreet suspendisse interdum consectetur libero id faucibus.",
            ],
        },
    ],
};

/** A mock journal entry with only a Gaming Grind section */
export const mockGamingGrindEntry: Entry = {
    title: "Gaming Grind Test Entry",
    timestamp: "01/05/2024",
    sections: [
        {
            type: GAMING_GRIND,
            title: "Test Gaming Grind Section",
            paragraphs: [
                "Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mattis enim ut tellus elementum sagittis. Ut sem nulla pharetra diam. In fermentum posuere urna nec tincidunt praesent semper feugiat. Enim eu turpis egestas pretium aenean pharetra magna. Nibh ipsum consequat nisl vel pretium lectus quam. Aliquam id diam maecenas ultricies mi eget. Tincidunt id aliquet risus feugiat in ante metus dictum at. Tristique senectus et netus et malesuada fames ac. Eget nunc scelerisque viverra mauris in aliquam. Morbi blandit cursus risus at ultrices mi. In arcu cursus euismod quis viverra nibh cras. Adipiscing elit pellentesque habitant morbi. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Pharetra pharetra massa massa ultricies mi. In eu mi bibendum neque egestas congue. Porttitor eget dolor morbi non arcu risus. Lectus magna fringilla urna porttitor rhoncus dolor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas integer eget aliquet nibh praesent tristique magna sit amet.",
            ],
        },
    ],
};

/** A mock journal entry with only a Random Ravings section */
export const mockRandomRavingsEntry: Entry = {
    title: "Random Ravings Test Entry",
    timestamp: "01/06/2024",
    sections: [
        {
            type: RANDOM_RAVINGS,
            title: "Test Random Ravings Section",
            paragraphs: [
                "Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Facilisis sed odio morbi quis commodo odio aenean. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Et ligula ullamcorper malesuada proin libero. Urna porttitor rhoncus dolor purus non enim praesent elementum. Nunc congue nisi vitae suscipit. Purus non enim praesent elementum facilisis leo vel fringilla. Pellentesque pulvinar pellentesque habitant morbi tristique. Diam sollicitudin tempor id eu nisl nunc. Eu volutpat odio facilisis mauris sit amet.",
            ],
        },
    ],
};
