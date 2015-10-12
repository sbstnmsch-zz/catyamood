import test from 'tape';
import {name} from '../../package.json';

test(`${name}: App should start on window.onload`, (t) => {
  t.pass('Someone should implement a test here ;-)');
  t.end();
});
