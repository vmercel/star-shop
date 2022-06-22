import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const DropDOWN = ({dat}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>color</Button>}>
          <Menu.Item onPress={() => {}} title={dat[0]} />
          <Menu.Item onPress={() => {}} title={dat[1]} />
          <Menu.Item onPress={() => {}} title={dat[2]} />
        </Menu>
      </View>
    </Provider>
  );
};

export default DropDOWN;