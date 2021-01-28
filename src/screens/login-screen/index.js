import React from 'react';
import Container from 'components/Container';
import { rhn, rwn, rw } from 'utils/style';
import Images from 'assets/Images';
import Center from 'components/Center';
import InputLabel from 'components/InputLabel';
import Button from 'components/Button';
import { strings } from 'language';
import { useTheme } from '@shopify/restyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginScreen() {
    const theme = useTheme();
    const styleInput = { color: theme.colors.text };

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = () => {};
    const style = { flex: 1 };
    return (
        <KeyboardAwareScrollView contentContainerStyle={style} enableOnAndroid>
            <Container>
                <Center flex={1}>
                    <InputLabel
                        label={strings('auth.username')}
                        variantLabel="14-500"
                        variantInput="14-500"
                        icon={Images.input_user}
                        width={rw(303)}
                        marginTop="s8rs"
                        styleInput={styleInput}
                        onChangeText={(text) => setUsername(text)}
                        defaultValue={username}
                    />
                    <InputLabel
                        label={strings('auth.password')}
                        variantLabel="14-500"
                        variantInput="14-500"
                        icon={Images.input_pwd}
                        width={rwn(303)}
                        marginTop="s11rs"
                        secureTextEntry
                        styleInput={styleInput}
                        onChangeText={(text) => setPassword(text)}
                        defaultValue={password}
                    />
                    <Button
                        variantText="14-bold"
                        label={strings('auth.login')}
                        backgroundColor="primary"
                        width={rwn(303)}
                        height={rhn(50)}
                        borderRadius={5}
                        labelColor="background"
                        marginTop="s22rs"
                        onPress={onSubmit}
                    />
                </Center>
            </Container>
        </KeyboardAwareScrollView>
    );
}
export default LoginScreen;
