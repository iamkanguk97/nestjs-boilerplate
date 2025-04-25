import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

export namespace ConfigUtil {
  /**
   * Validate the specific config object
   *
   * @author Jason
   */
  export function validateConfig<T extends object>(
    config: Record<string, unknown>,
    envVariableClass: ClassConstructor<T>
  ): void {
    const validatedConfig = plainToClass(envVariableClass, config, {
      enableImplicitConversion: true,
    });

    const validateErrorList = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    // [TODO: 2025.03.31] ExceptionFilter 및 Error-Format 적용 후 수정 필요
    if (validateErrorList.length > 0) {
      throw new Error(validateErrorList.toString());
    }

    return;
  }
}
