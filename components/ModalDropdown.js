import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const OrderSize = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>color</Button>}>
          <Menu.Item onPress={() => {closeMenu}} title="Red" />
          <Menu.Item onPress={() => {}} title="Green" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Blue" />
        </Menu>
        </View>
        <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Size</Button>}>
          <Menu.Item onPress={() => {closeMenu}} title="small" />
          <Menu.Item onPress={() => {}} title="medium" />
          <Divider />
          <Menu.Item onPress={() => {}} title="large" />
        </Menu>        
        </View>
      </View>
    </Provider>
  );
};

export default OrderSize;